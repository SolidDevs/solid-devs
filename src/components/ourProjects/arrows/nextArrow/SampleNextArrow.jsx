import scss from "../arrow.module.scss";
export default function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${scss.nextArrow}`} onClick={onClick}>
      <svg
        width="56"
        height="26"
        viewBox="0 0 56 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M44.3505 25.4829L55.4874 14.2483C56.1709 13.5589 56.1709 12.4411 55.4874 11.7517L44.3505 0.517063C43.6671 -0.17235 42.559 -0.17235 41.8756 0.517063C41.1922 1.20648 41.1922 2.32424 41.8756 3.01365L50.0251 11.2346L-1.29083e-06 11.2346L-9.82164e-07 14.7654L50.0251 14.7654L41.8756 22.9863C41.1922 23.6758 41.1922 24.7935 41.8756 25.4829C42.5591 26.1723 43.6671 26.1723 44.3505 25.4829Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
