# Hi, I'm Alex. Welcome to my portfolio!

This is my portfolio website showcasing my skills, projects, and experience as a SRE/DevOps and Tech Enthusiast.

## Key Features
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Interactive Elements**: Includes a contact form with reCAPTCHA for spam protection.
- **Skills and Projects**: Displays my technical skills and completed projects.
- **Smooth Navigation**: Easy-to-use navigation with active link highlighting.

## Technologies Used
- **HTML5**: For structuring the content.
- **CSS3**: For styling and layout.
- **JavaScript**: For interactivity and form validation.
- **Swiper.js**: For creating responsive sliders.
- **Formspree**: For handling form submissions.
- **Google reCAPTCHA**: For spam protection.

## Setup Instructions
1. Clone the repository:
```sh
   git clone https://github.com/alexgrajdan/alexgrajdan.github.io.git
```
2. Navigate to the project directory:
 ```sh
   cd alexgrajdan.github.io
```
3. Open `index.html` in your preferred web browser to view the website.

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment. The pipeline is defined in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) and includes:

### Automated Checks
- HTML validation using `tidy`
- CSS validation using `stylelint`
- JavaScript linting using `eslint`
- Commit signature verification

### Deployment
The website is automatically deployed to GitHub Pages when:
- Changes are pushed to the `main` branch
- Pull requests are merged into `main`

### Workflow Steps
1. Code checkout
2. Set up Node.js environment
3. Install dependencies
4. HTML, CSS, and JavaScript validation
5. Create and merge deployment PR

To view the deployment status, check the "Actions" tab in the GitHub repository.

Note: Only signed commits following the [security policy](SECURITY.md) will trigger deployments.

## Usage Instructions
- **Navigation**: Use the navigation menu to explore different sections of the website.
- **Contact Form**: Fill out the contact form to send me a message. Ensure all fields are filled out and reCAPTCHA is completed.

## Contributing
Before contributing, please ensure you have:
1. Configured GPG key for commit signing. Follow [GitHub's guide for managing commit signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).
2. Enabled commit signing in Git:
```sh
   git config --global commit.gpgsign true
```
**Then you will need to proceed with these steps**:
1. Fork the repository
2. Create a new branch:
```sh
   git checkout -b feature/your-feature-name
```
3. Make your changes and commit them using signed commits:
```sh
   git commit -S -m "Add your commit message"
```
4. Push to the branch:
```sh
   git push origin feature/your-feature-name
```
5. Open a pull request to the `main` branch

***Note***: *Only verified signed commits will be accepted in pull requests.*

## Contact
Feel free to reach out to me via the contact form on the website or connect with me on [LinkedIn](https://www.linkedin.com/in/alexandru-grăjdan-542a29205) and [GitHub](https://github.com/alexgrajdan).