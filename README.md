# NPM Deploy Demo

NPM Deploy demo with Travis-CI Integration

## Attention
If you made your own demo npm package, I recommend unpublishing.

1. Comment out the deploy part of `.travis.yml`
2. Push this change to `master`
3. Run the following from your command line:
```
npm unpublish your-module-name --force
```

If you get an error: 
```
npm ERR! code E403 
npm ERR! You do not have permission to publish "npm-deploy-demo". Are you logged in as the correct user?
```
Run `npm adduser` and authenticate yourself in the package directory. Run the `unpublish` command again.