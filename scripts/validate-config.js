#!/usr/bin/env node

/**
 * Configuration Validation Script for AZ-Digital-Hub
 * Ensures deployment safety by validating dangerous patterns
 */

const fs = require('fs');
const path = require('path');

const FORBIDDEN_PATTERNS = {
  'next.config.js': [
    /ignoreDuringBuilds\s*:\s*true/,
    /ignoreBuildErrors\s*:\s*true/,
    /typescript\.ignoreBuildErrors/,
    /eslint\.ignoreDuringBuilds/
  ],
  'tsconfig.json': [
    /"skipLibCheck"\s*:\s*true/,
    /"noUnusedLocals"\s*:\s*false/,
    /"strict"\s*:\s*false/,
    /"target"\s*:\s*"es5"/i
  ],
  'package.json': [
    /--ignore-pattern/,
    /--max-warnings\s+[1-9]/
  ]
};

function validateFile(filePath, patterns) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const violations = [];
    
    patterns.forEach((pattern, index) => {
      if (pattern.test(content)) {
        violations.push({
          file: filePath,
          pattern: pattern.toString(),
          line: content.split('\n').findIndex(line => pattern.test(line)) + 1
        });
      }
    });
    
    return violations;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

function runValidation() {
  console.log('🔍 Running Configuration Safety Validation...\n');
  
  let totalViolations = 0;
  const allViolations = [];
  
  Object.entries(FORBIDDEN_PATTERNS).forEach(([file, patterns]) => {
    const filePath = path.join(process.cwd(), file);
    const violations = validateFile(filePath, patterns);
    
    if (violations.length > 0) {
      totalViolations += violations.length;
      allViolations.push(...violations);
    }
  });
  
  if (totalViolations > 0) {
    console.error('❌ DANGEROUS CONFIGURATION DETECTED\n');
    allViolations.forEach(violation => {
      console.error(`  File: ${violation.file}`);
      console.error(`  Line: ${violation.line}`);
      console.error(`  Pattern: ${violation.pattern}\n`);
    });
    process.exit(1);
  } else {
    console.log('✅ All configuration files are safe!');
    console.log('✅ No dangerous patterns detected.');
    process.exit(0);
  }
}

// Run validation
runValidation();
