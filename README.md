# Parcel Question/Issue: Disabling urlPlugin

Steps to repro:

```bash
git clone git@github.com:sitecrafting/parcel-urlplugin-issue.git
cd parcel-urlplugin-issue
yarn
lessc less/style.less style.css # this works
node build.js # this doesn't
```
