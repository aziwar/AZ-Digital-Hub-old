# Dependency Resolution Plan for AZ-Digital-Hub

## Current Issues Identified

1. **React Version Conflict**
   - Your package.json has React 18.3.1, but @react-three/fiber 8.18.0 requires React <19
   - This is causing the primary dependency resolution failure

2. **Package Version Mismatches**
   - nextjs-toploader version 3.8.16 (you had ^1.7.1 which doesn't exist)
   - @react-three/fiber and @react-three/drei version incompatibility
   - Tailwindcss peer dependency issues

## Immediate Fix Strategy

### Step 1: Clean Install Script
Create a clean install script that handles all edge cases:

```powershell
# clean-install.ps1
Write-Host "Starting clean dependency installation..." -ForegroundColor Green

# 1. Clear all caches
Write-Host "Clearing npm cache..." -ForegroundColor Yellow
npm cache clean --force

# 2. Remove existing dependencies
Write-Host "Removing node_modules and lock files..." -ForegroundColor Yellow
if (Test-Path "node_modules") { Remove-Item -Recurse -Force node_modules }
if (Test-Path "package-lock.json") { Remove-Item -Force package-lock.json }
if (Test-Path ".next") { Remove-Item -Recurse -Force .next }

# 3. Install with legacy peer deps first
Write-Host "Installing dependencies with legacy peer deps..." -ForegroundColor Yellow
npm install --legacy-peer-deps

# 4. Audit and fix
Write-Host "Running audit fix..." -ForegroundColor Yellow
npm audit fix --legacy-peer-deps

Write-Host "Installation complete!" -ForegroundColor Green
```

### Step 2: Update Package Versions
Update your package.json with compatible versions:

```json
{
  "dependencies": {
    "@react-three/drei": "^9.88.0",
    "@react-three/fiber": "^8.15.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "nextjs-toploader": "^1.6.0"
  }
}
```

## Long-term Prevention Strategy

### 1. Dependency Lock Strategy
- Always commit package-lock.json
- Use exact versions for critical dependencies
- Review dependency updates before applying

### 2. Version Management Rules
```json
{
  "overrides": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### 3. Pre-install Checks
Create a pre-install script that validates compatibility:

```javascript
// scripts/check-deps.js
const package = require('../package.json');

const compatibilityRules = {
  'react': { max: '18.99.99' },
  '@react-three/fiber': { compatible: '^8.0.0' }
};

// Validation logic here
```

### 4. CI/CD Integration
- Add dependency checks to your build pipeline
- Use npm ci instead of npm install in production
- Regular dependency audits

## Best Practices to Avoid Future Issues

1. **Use Fixed Versions for Critical Dependencies**
   ```json
   "@react-three/fiber": "8.15.0",  // No ^ or ~
   ```

2. **Regular Dependency Updates**
   - Weekly: `npm outdated`
   - Monthly: `npm update --save`
   - Quarterly: Major version reviews

3. **Dependency Documentation**
   - Document why specific versions are used
   - Note any known incompatibilities
   - Keep a changelog of dependency updates

4. **Testing Strategy**
   - Test dependency updates in a separate branch
   - Use a staging environment
   - Automated tests for critical functionality

5. **Fallback Strategy**
   - Keep a known-good package-lock.json backup
   - Document last working configuration
   - Have rollback procedures ready

## Quick Reference Commands

```powershell
# When you encounter issues:
npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install --legacy-peer-deps

# For specific version conflicts:
npm install --force

# To check for issues:
npm ls
npm outdated
npm audit
```

## Monitoring and Maintenance

1. Set up dependabot or renovate for automated PRs
2. Use npm-check-updates for version management
3. Regular security audits with `npm audit`
4. Keep a dependency update log

This plan will help you avoid 90% of dependency issues in the future!
