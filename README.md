# Pathways frontend

This repository contains the client for providing access to data about services for refugees and immigrants to BC.

The client is implemented in react-native, using create-react-native-app, redux, redux-first-router, native-base and lingui.

# Getting started

## Initial setup and build

With a fresh repository, this will get the application compiled and running on Expo:

Install dependencies

```
yarn install
```

Compile TypeScript, optionally watch source files for changes and build them automatically

```
yarn build [--watch]
```

Run tests, optionally watch source files for changes and run the tests automatically

```
yarn test [--watch]
```

Build and start Expo to run the app in a simulator or on an actual Android or Apple device:

```
yarn start
```

and follow instructions to open app in Expo, or to open the app on either android or ios, do either of these

```
yarn android
yarn ios
```

## Internationalization (i18n)

We are using [jsLingui](https://github.com/lingui/js-lingui) for translation and internationalization (date formats and such) support. Use the following commands to mainpulate strings for translation.

To add a new locale, this generates an empty messages catalog for the new locale:

```
yarn lingui add-locale [locales...]
```

To extract all strings from codebase into catalogs (per-locale messages.json files). The json files should be the starting point for translation. Use the option `--clean` to remove strings that are no longer found in the source code, by default these strings are retained but marked as obsolete.

```
yarn extract-strings [--clean]
```

To compile messages catalogs into optimized & importable javascript modules, this should be done after translations have been completed:

```
yarn build-strings
```

To remove cached strings, this is usually needed when switching between branches:

```
yarn clean-strings
```

## Contributing

If you want to help out, get in touch at dev@peacegeeks.org.

### Commit messages

All commits are labelled with the issue they are being done under. This ensures that we don't do work that is not tracked, and history of why every change is made is maintained. Most front end and back end work is tracked by issues in their respective repositories, in which case the commit message should start with "Issue #N", e.g. "Issue #13". Occasionally, front end work may be tracked under backend issues, in which case each commits message should start with "Issue pg-irc/pathways-backend#13".
