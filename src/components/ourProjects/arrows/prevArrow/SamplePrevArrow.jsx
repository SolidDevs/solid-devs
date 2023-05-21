import scss from "../arrow.module.scss";
export default function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${scss.prevArrow}`} onClick={onClick} id="project">
      <svg
        width="56"
        height="26"
        viewBox="0 0 56 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6495 25.4829L0.512559 14.2483C-0.170855 13.5589 -0.170855 12.4411 0.512559 11.7517L11.6495 0.517063C12.3329 -0.17235 13.441 -0.17235 14.1244 0.517063C14.8078 1.20648 14.8078 2.32424 14.1244 3.01365L5.97487 11.2346L56 11.2346L56 14.7654L5.97487 14.7654L14.1244 22.9863C14.8078 23.6758 14.8078 24.7935 14.1244 25.4829C13.4409 26.1723 12.3329 26.1723 11.6495 25.4829Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
