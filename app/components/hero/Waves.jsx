import classes from "./Waves.module.css";

export const HeroWaves = () => {



  return (
    <div className={`${classes.container} right-24 max-sm:right-0 z-0`}>
      <div className={`${classes.waves} -rotate-12`}>
      <svg
        width="100%"
        height="200%"
        viewBox="0 -1000 400 2000"
        xmlns="http://www.w3.org/4000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 100 -1000 C 0 -500 200 -500 100 0 C 0 500 200 500 100 1000 L 400 1000 L 400 -1000 Z"
          fill="#006D84"
        />
        <path
          d="M 150 -1000 C 0 -500 300 -500 150 0 C 0 500 300 500 150 1000 L 400 1000 L 400 -1000 Z"
          className="fill-element-secondary"
        />
        <path
          d="M 200 -1000 C 0 -500 400 -500 200 0 C 0 500 400 500 200 1000 L 400 1000 L 400 -1000 Z"
          fill="#04718D"
        />
        <path
          d="M 250 -1000 C 150 -500 350 -500 250 0 C 150 500 350 500 250 1000 L 400 1000 L 400 -1000 Z"
          className="fill-background-dark dark:fill-background"
        />
      </svg>
      </div>
    </div>
  );
};