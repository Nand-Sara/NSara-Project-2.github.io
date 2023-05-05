# NSara-Project-2


# Project 2 - Landing Page

<br>

## Aim
This project aims to create a landing page template from scratch that engages the visitor with an interactive experience.

<br>

## Description
A landing page is a static webpage that contains specific information of a product or service offered by a company.

Major features of a landing page include:
- Customization towards a specific campaign.
- Search engine optimizaton.
- Limited Navigation.
- Targets a specific audience.

### Need for Landing Pages:
- Lead generation.
- Increase brand value.
- Focus on a specific campaign and prevent distractions.
- Call to action by offering a valuable asset in exchange for contact information.

<br>

## Demo
To view the webpage, click the following link: [Landing Page](https://nand-sara.github.io/nsara_project_2/index.html)

![Landing Page](https://nand-sara.github.io/nsara_project_2/assets/documentation/landing-page.png "Landing Page")
*Landing Page as viewed on a Desktop browser*

To view the project on GitHub, click the following link: [GitHub Project](https://github.com/Nand-Sara/nsara_project_2/)

<br><br>

# Table of Contents

- [Aim](#aim)
- [Description](#description)
- [Demo](#demo)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Development](#development)
- [License](#license)
- [Resources](#resources)
- [References](#references)

<br>

## Features

### 1. Responsive
The page is completely responsive across all devices, different screen sizes and viewports.

To ensure that the webpage adapts to all device screen sizes I have used,
- Fluid grid design.
- Media queries in the CSS code.
- JavaScript to automatically adjust the max width of the landing page across different displays according to its available width.
- Font size and scale transformations to fit within the device width.

To check the responsiveness of the page follow the below steps:

#### Step 1: Inspect element
**Right click** on the webpage and click on **Inspect**.

Or you can use the following keyboard commands:

- Mac: **⌘ + Shift + C**
- Windows/Linux: **F12** or **Ctrl + Shift + C** or **Ctrl + Shift + I**

![Inspect Element](https://nand-sara.github.io/nsara_project_2/assets/documentation/inspect.png "Inspect Element")
*Drop down menu on Right Clicking the page*

#### Step 2: Check Responsiveness
Toggle between devices by clicking on the *Toggle device toolbar* icon on the top left corner of the dev panel.

Or you can use the keyboard shortcut: **Ctrl + Shift + M**

Click on the dropdown menu and select **Responsive** for checking the responsiveness of the page in different screen widths.

![Responsive](https://nand-sara.github.io/nsara_project_2/assets/documentation/responsive.png "Responsive")
*Click on the device toggle and choose Responsive on the device dropdown list* 

<br><br>

### 2. Browser Compatible

The webpage was developed using HTML5, CSS and JavaScript which is fully functional in the following browsers:

<table>
  <tr>
    <th>Browser</th>
    <td>Chrome</td>
    <td>Edge</td>
    <td>Firefox</td>
    <td>Internet Explorer</td>
    <td>Opera</td>
  </tr>
  <tr>
    <th>Is Supported?</th>
    <td>Yes</td>
    <td>Yes</td>
    <td>Yes</td>
    <td>v 11.0</td>
    <td>Yes</td>
  </tr>
</table>

<br><br>

### 3. Easy Navigation

The navigation is set to be fixed at the top of the webpage so that it can be easily accessible. The top navbar is hidden on scrolling down and reappears on scrolling up. The links to each section of the page are also available in the footer section of the page.

![Navbar](https://nand-sara.github.io/nsara_project_2/assets/documentation/navigation.png "Top navbar and page links in the footer")
*Top Navigation bar and links in the footer*

The navigation bar display automatically switches from horizontal to vertical for smaller devices.

![Navbar](https://nand-sara.github.io/nsara_project_2/assets/documentation/vertical-navbar.png "Top navbar and page links in the footer")

*Vertical navbar*

The section which in the viewport is highlighted on scroll.

<br><br>

### 4. Interactive

The page is built with collapsible sections, enabling an engaging and interactive experience for the users.

![Interactive sections](https://nand-sara.github.io/nsara_project_2/assets/documentation/interactive.png "Section Open")
*Section Open*

<br>

![Interactive sections](https://nand-sara.github.io/nsara_project_2/assets/documentation/interactive_1.png "Section Open")
*Section Close*

<br><br>

### 5. Smooth Scroll

To ensure smooth scrolling behavior, a jquery library has been used. Whenever a link is clicked to an anchor on the same page, the browser changes the position within the viewport from the originating link that is clicked to the destination anchor on the same page with an animated effect.

<br><br>

### 6. Highlight Active Section

An active class has been added to each section to highlight the section that is open.

A hover effect has also been added whenever the mouse hovers over a section.

<br>

![Active State](https://nand-sara.github.io/nsara_project_2/assets/documentation/active-state.png "Highlight active sections and hover sections")
*[From top] Different colors added to the section that is being moused over, not active and active*

<br>

[(Back to top)](#table-of-contents)

<br>

## Usage

This is a sample landing page.
This project can be used as a template or as reference for front end development of landing pages.

[(Back to top)](#table-of-contents)

<br>

## Installation

To run this project locally the following methods can be used:

- [Clone the Repository with HTTPS URLs (on Web Browser)](#clone-the-repository-with-https-urls-on-web-browser)
- [Clone the Repository with HTTPS URLs (on Desktop)](#clone-the-repository-with-https-urls-on-desktop)
- [Clone the Repository using GitHub CLI](#clone-the-repository-using-github-cli)
- [Download ZIP file](#download-the-entire-directory-as-a-zip-file)

### Clone the Repository with HTTPS URLs (on Web Browser)

#### Step 1: Copy the URL

1. Visit the main page of the repository: [GitHub Repo](https://github.com/Nand-Sara/nsara_project_2)
2. Click on **<> Code** and copy the url from the **HTTPS** tab

<br>

![Cloning using HTTPS url](https://nand-sara.github.io/nsara_project_2/assets/documentation/https-clone.png "Copy the link on the HTTPS tab")

*Copy the URL on the HTTPS tab*

(Or)

Copy the HTTPS url from below: 
```sh
https://github.com/Nand-Sara/nsara_project_2.git
```

#### Step 2: Clone the Repository

1. Open **Git Bash** (for Windows users) or **Terminal** (for Mac and Linux users)

<br>

<details>
  <summary>Git Bash</summary>
  <br>
  <ul>
    <li>Git Bash comes as a part of the <a href = "https://gitforwindows.org/">Git For Windows</a> package.
      <ol>
        <li>Download and install Git for Windows like any other Windows application.</li>
        <li>Run the installation wizard that opens when the application `(.exe)` file is clicked and execute Git Bash.</li>
      </ol>
    </li>
    <li>Git Bash can be used to run Git directly fromt the command line.</li>
  </ul>
  <br>
</details>

2. Change the current working directory to the location where you want the cloned directory.
3. Type `git clone`, and then paste the URL you copied earlier.

```bash
$ git clone https://github.com/Nand-Sara/nsara_project_2.git
```

4. Press **Enter** to create a local clone of the repository.

<br>

[(Installation)](#installation)

<br>

### Clone the Repository with HTTPS URLs (on Desktop)

#### Step 1: Navigate to the main page of the Repository

1. Visit the main page of the repository: [GitHub Repo](https://github.com/Nand-Sara/nsara_project_2)
2. Click on **<> Code** and click **Open with GitHub Desktop**

Download GitHub Desktop for Windows [here](https://desktop.github.com/)

#### Step 2: Clone the Repository

3. Once the, **Clone the Repository** dialog box opens, click on the **URL** tab.
4. Enter the local directory or click on **Choose...** to find a local path where you want the repository to be cloned.
5. Click **Clone**. 

<br>

[(Installation)](#installation)

<br>

### Clone the Repository using GitHub CLI

#### Step 1: Copy the command

1. Visit the main page of the repository: [GitHub Repo](https://github.com/Nand-Sara/nsara_project_2)
2. Click on **<> Code** and copy the command from the **GitHub CLI** tab

<br>

![Cloning using GitHub cli](https://nand-sara.github.io/nsara_project_2/assets/documentation/cli-clone.png "Copy the link on the GitHub CLI tab")

*Copy the URL on the GitHub CLI tab*

(Or)

Copy the command from below: 
```sh
gh repo clone Nand-Sara/nsara_project_2
```

#### Step 2: Clone the Repository

1. Enter the above command in the command line or terminal.
2. Click **Enter**.
3. Alternatively, you can use the absolute URL for cloning:

```sh
gh repo clone https://github.com/Nand-Sara/nsara_project_2
```

<br>

[(Installation)](#installation)

<br>

### Download the entire directory as a zip file

1. Visit the main page of the repository: [GitHub Repo](https://github.com/Nand-Sara/nsara_project_2)
2. Click on **<> Code** and click **Download ZIP**
3. You can now work with a local copy of the project.

<br>

[(Installation)](#installation)

<br>

[(Back to top)](#table-of-contents)

<br>

## Development

### Code Used

- HTML
- CSS
- JavaScript
- JQuery

<br>

[(Back to top)](#table-of-contents)

<br>

## License
[MIT](https://opensource.org/license/mit/)

<br>

[(Back to top)](#table-of-contents)

<br>

## Resources

- Fonts: [Google Fonts](https://fonts.google.com/)
- Images: [Freepik](https://www.freepik.com/)
- Icons: [Font Awesome](https://fontawesome.com/icons)

<br>

[(Back to top)](#table-of-contents)

<br>

## References

- [Udacity Frontend Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
- [README Template](https://github.com/navendu-pottekkat/awesome-readme/blob/master/README-template.md)
- [Basic Syntax Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [W3schools](https://www.w3schools.com/)

<br>

[(Back to top)](#table-of-contents)
