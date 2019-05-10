# Parcel Question/Issue: Disabling urlPlugin

Steps to repro:

```bash
git clone git@github.com:sitecrafting/parcel-urlplugin-issue.git
cd parcel-urlplugin-issue
yarn
lessc less/style.less style.css # this works
node build.js # this doesn't
```

The last command results in:

> 🚨  /home/ctamayo/workspace/parcel-issue/less/img/chevron-down.svg: ENOENT: no such file or directory, open '/home/ctamayo/workspace/parcel-issue/less/img/chevron-down.svg'
