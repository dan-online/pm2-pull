[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<div align="center">
  <h3 align="center">PM2-Pull</h3>
  <p align="center">
    PM2 module to automatically pull the git repository of running apps.
    <br />
    <a href="https://github.com/dan-online/pm2-pull/issues">Report Bug</a>
    ·
    <a href="https://github.com/dan-online/pm2-pull/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Configuration</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[PM2-Auto-Pull](https://github.com/keymetrics/pm2-auto-pull) has not received an update for almost 5 years now (as of 2023), so I decided to rewrite it in typescript and hopefully make it more stable and easier to use.

### Built With

- [tsup](https://tsup.egoist.dev/)
- [Rome](https://rome.tools/)

## Getting Started

To get this running with your project, follow these simple steps.

### Install

- pm2
  ```sh
  pm2 install pm2-pull
  ```

## Configuration

```bash
$ pm2 set pm2-pull:<attr> <val>

# Example
$ pm2 set pm2-pull:interval 10000 # 10 seconds, default: 30000 (30 seconds)
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

## Contact

DanCodes - [@dan-online](https://github.com/dan-online) - dan@dancodes.online

Project Link: [https://github.com/dan-online/pm2-pull](https://github.com/dan-online/pm2-pull)


[contributors-shield]: https://img.shields.io/github/contributors/dan-online/pm2-pull.svg?style=for-the-badge
[contributors-url]: https://github.com/dan-online/pm2-pull/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dan-online/pm2-pull.svg?style=for-the-badge
[forks-url]: https://github.com/dan-online/pm2-pull/network/members
[stars-shield]: https://img.shields.io/github/stars/dan-online/pm2-pull.svg?style=for-the-badge
[stars-url]: https://github.com/dan-online/pm2-pull/stargazers
[issues-shield]: https://img.shields.io/github/issues/dan-online/pm2-pull.svg?style=for-the-badge
[issues-url]: https://github.com/dan-online/pm2-pull/issues
[license-shield]: https://img.shields.io/github/license/dan-online/pm2-pull.svg?style=for-the-badge
[license-url]: https://github.com/dan-online/pm2-pull/blob/master/LICENSE
[product-screenshot]: https://github.com/dan-online/pm2-pull/raw/main/assets/images/demo.png?raw=true
