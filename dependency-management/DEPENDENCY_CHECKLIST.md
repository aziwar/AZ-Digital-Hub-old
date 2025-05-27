# NPM Dependency Management Checklist

## ✅ Daily Development
- [ ] Run `npm run dev` normally
- [ ] If errors occur, run `npm run clean-install`

## 📅 Weekly Maintenance
- [ ] Run `npm run deps:check` to see outdated packages
- [ ] Review any security warnings
- [ ] Update patch versions if needed

## 📆 Monthly Review
- [ ] Run `npm run deps:audit` for security check
- [ ] Update minor versions in a test branch
- [ ] Test all major features after updates
- [ ] Document any issues found

## 🚨 When You Encounter Issues

### Quick Fix (90% of cases):
```powershell
npm run clean-install
```

### If Quick Fix Doesn't Work:
1. Check error message for specific package
2. Look for version conflicts
3. Try these commands in order:
   ```powershell
   npm cache verify
   npm install --force
   npm install --legacy-peer-deps
   ```

### Nuclear Option (last resort):
```powershell
# Delete everything and start fresh
Remove-Item -Recurse -Force node_modules, package-lock.json, .next, .npmrc
npm cache clean --force
npm install --legacy-peer-deps
```

## 📌 Important Version Locks

These packages must stay at these versions:
- `react`: 18.2.0 (DO NOT upgrade to 19.x)
- `react-dom`: 18.2.0 (must match react)
- `@react-three/fiber`: 8.15.0 (not compatible with React 19)
- `three`: 0.160.0 (tested with current drei version)

## 🔧 Troubleshooting Guide

### Error: "Could not resolve dependency"
- Run: `npm run clean-install`
- Check `.npmrc` file exists

### Error: "peer dep missing"
- Already handled by `.npmrc` settings
- If persists, add to `overrides` in package.json

### Error: "version not found"
- Package version doesn't exist
- Check npm registry for correct version
- Update package.json with correct version

### Error: "ERESOLVE unable to resolve"
- Version conflict between packages
- Check package.json for incompatible versions
- Use `npm ls` to see dependency tree

## 💡 Pro Tips

1. **Always commit package-lock.json**
   - It ensures consistent installs
   - Prevents "works on my machine" issues

2. **Use exact versions for critical deps**
   - Remove ^ and ~ for important packages
   - Prevents surprise breaking changes

3. **Test updates in branches**
   - Never update directly on main
   - Test thoroughly before merging

4. **Keep this checklist updated**
   - Add new issues as you find them
   - Document solutions that worked

## 📞 Emergency Contacts

If all else fails:
1. Check npm status: https://status.npmjs.org/
2. Search package issues on GitHub
3. Ask on Stack Overflow with error details
4. Post in Discord/Slack dev communities

Remember: Most npm issues are version conflicts. Stay calm and check versions! 🚀
