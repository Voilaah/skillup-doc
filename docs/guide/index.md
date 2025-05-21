---
title: Getting Started
editLink: true
---

# SkillUp Guide

Welcome to the official documentation of the **SkillUp** platform, the all-inclusive e-learning solution for the Laravel-based OctoberCMS.

On the following pages you will find all the information you need to install the plugin on your website and integrate it in your used theme. You will also read about the individual models, controllers and how you can extend them to integrate your own functions.

> [!NOTE]
> If you think, that some details are missing or not sufficiently well explained, we invite you to
> extend and add this to our documentation. For this case you will find an "Edit this page on GitHub"
> link at the bottom of each page, which brings you to the corresponding markdown file in our Github
> repository. Thanks for your help!

## Requirements

We highly recommend using the latest OctoberCMS v3 and PHP v8 versions available, however, the following requirements represent the minimum needed to run Mall on your website.

- OctoberCMS v3.0+
- PHP v8.0+
- MySQL v5.7+ | v8.0+ **`or`** MariaDB v10.2+ **`or`** SQLite<span style="color: red;">**\***</span> v3.19+

> [!CAUTION] > <span style="color: red;">**\***</span> Although it is possible to use SkillUp via SQLite, we
> strongly recommend using one of the other database systems, especially on a large number of
> products or customers.

### Dependencies

SkillUp relies on the following official OctoberCMS Plugins, which must be installed before installing the SkillUp extension itself.

- [RainLab.Location](https://octobercms.com/plugin/rainlab-location) v1.2+
- [RainLab.Translate](https://octobercms.com/plugin/rainlab-translate) v1.9+ | v2.0+
- [RainLab.User](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [RainLab.UserPlus](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [Responsiv.Uploader](https://octobercms.com/plugin/rainlab-user) v1.6+ | v2.0+
- [Dubk0ff.UniCrumbs](https://github.com/dubk0ff/unicrumbs-plugin) v2.0+
- [OFFLINE.Boxes](https://octobercms.com/plugin/offline-boxes) v3.5+

SkillUp also requires the following PHP packages, which should be installed automatically, when installing SkillUp via `plugin:install` or `project:sync` on OctoberCMS v3 installations.

- [barryvdh/laravel-dompdf](https://packagist.org/packages/barryvdh/laravel-dompdf) v1.0+ | v2.0+
- [laravel/socialite](https://packagist.org/packages/laravel/socialite) v5.1+
- [mews/captcha](https://packagist.org/packages/hashids/hashids) v3.4


### Optional dependencies

The following dependencies are only required if necessary, but must be installed manually if needed.

### Development dependencies

The following dependencies are only required when developing or extending the SkillUp plugin itself, and must be installed manually as well, of course.

- [fakerphp/faker](https://packagist.org/packages/fakerphp/faker) v1.23+
- [mockery/mockery](https://packagist.org/packages/mockery/mockery) v1.6+
- [phpunit/phpunit](https://packagist.org/packages/omnipay/stripe) v8.5+ | v9.0+
- [squizlabs/php_codesniffer](https://packagist.org/packages/squizlabs/php_codesniffer) v3.0+

## Links

- [Demo Website](https://skillup.global)
- SkillUp Plugin - [GitHub](https://github.com/voilaah/oc-skillup-plugin)
