# NTTG (Next.js TypeScript Tailwind GSAP)

NTTG is a boilerplate project that combines the power of Next.js, TypeScript, Tailwind CSS, and GSAP to kickstart your web development projects. It comes with a proprietary GSAP Scroll Smoother integration that enhances your website's scrolling experience. To get started with this project, follow the steps below:

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

-   Node.js: [Download and install Node.js](https://nodejs.org/)
-   Yarn (optional but recommended): [Install Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/nikolasmorado/nttg.git
    ```

2. Navigate to the project directory:

    ```bash
    cd nttg
    ```

3. Install the project dependencies using either npm or yarn:

    If you're using npm:

    ```bash
    npm install
    ```

    If you're using Yarn:

    ```bash
    yarn
    ```

4. **Important:** The proprietary GSAP Scroll Smoother file must be placed in the `lib/utils/gsap` directory. The project won't run without it. Make sure to obtain this file separately and add it to the directory. This can be purchase [here](https://gsap.com/pricing/)
5. Start the development server:

    If you're using npm:

    ```bash
    npm run dev
    ```

    If you're using Yarn:

    ```bash
    yarn dev
    ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see your NTTG project in action.

## Project Structure

The project structure is organized as follows:

-   `app`: Contains the Next.js app router.
-   `public`: Place static assets like images, fonts, and other resources here.
-   `lib`: Store everything else here.
    -   `lib/components`: Store your JSX components here.
    -   `lib/utils`: Utility functions, and the `gsap` directory where you should place the proprietary GSAP Scroll Smoother file.
