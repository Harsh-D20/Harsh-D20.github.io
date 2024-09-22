import './App.css';

import Card from './Card/Card'
import SectionHeader from './SectionHeader/SectionHeader'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Profile from './Profile/Profile'

function App() {

  const profileData = {
    title: "About Me",
    src: "/cropped_harsh.jpg",
    bio: `I am a student at the University of Maryland College Park pursuing a 
    Bachelor of Science in Computer Science with a minor in both Statistics and Astronomy. 
    I am a skilled Java programmer and love exploring more areas of Computer Science.`
  }

  const skillCardData = {
    java: {
      title: "Java",
      text: new Date().getFullYear() - 2019 + " years",
      src: "/skill-icons/java-icon.png"
    },
    python: {
      title: "Python",
      text: "2 years",
      src: "/skill-icons/python-icon.png"
    },
    javascript: {
      title: "JavaScript",
      text: new Date().getFullYear() - 2022 + " years",
      src: "/skill-icons/js-icon.png"
    },
    html: {
      title: "HTML",
      text: "2 years",
      src: "/skill-icons/html-logo.png"
    },
    css: {
      title: "CSS",
      text: "2 years"
    },
    c_sharp: {
      title: "C#",
      text: "1 year"
    },
    r_lang: {
      title: "R",
      text: "2 years",
      src: "/skill-icons/r-logo.png"
    },
    sql_lite: {
      title: "SQLite",
      text: "1 year"
    },
    ocaml: {
      title: "Functional OCaml",
      text: "1 year"
    },
    vscode: {
      title: "VSCode",
      text: new Date().getFullYear() - 2020 + " years"
    },
    textpad: {
      title: "TextPad",
      text: "2 years"
    },
    unity: {
      title: "Unity",
      text: "1 year",
      src: "/skill-icons/unity-logo.png"
    },
    git_hub: {
      title: "Git / GitHub",
      text: new Date().getFullYear() - 2022 + " years",
      src: "/skill-icons/github-logo.png"
    },
  }

  return (
    <>
      <Header />
      <Profile {...profileData} />

      <a href="mailto:desai.harsh.747@gmail.com">Email</a>

      <SectionHeader text="Skills and Tools" />
      <section className='card-grid'>
        <Card {...skillCardData.java} />
        <Card {...skillCardData.python} />
        <Card {...skillCardData.javascript} />
        <Card {...skillCardData.html} />
        <Card {...skillCardData.css} />
        <Card {...skillCardData.c_sharp} />
        <Card {...skillCardData.r_lang} />
        <Card {...skillCardData.sql_lite} />
        <Card {...skillCardData.ocaml} />
        <Card {...skillCardData.vscode} />
        <Card {...skillCardData.textpad} />
        <Card {...skillCardData.unity} />
        <Card {...skillCardData.git_hub} />
      </section>

      <SectionHeader text="Relevant Coursework" />
      <section className='card-grid'>
        <Card title={"Data Structures and Algorithms"} text="CMSC351" />
        <Card title={"Cryptography"} text="CMSC456" />
        <Card title={"Discrete Structures"} text="CMSC250" />
        <Card title={"Intro to Computer Systems"} text="CMSC216" />
        <Card title={"Intro to Data Science"} text="CMSC320" />
        <Card title={"Intro to Linear Algebra"} text="MATH240" />
        <Card title={"Applied Statistics and Probability"} text="STAT400" />
        <Card title={"Multivariable Calculus"} text="MATH241" />
      </section>

      <Footer />
    </>
  )

}

export default App
