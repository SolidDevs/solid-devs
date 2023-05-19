import { useTranslation } from "react-i18next";
import scss from "../Work.module.scss";
import { useRouter } from "next/router";

export default function SampleNextArrow(props) {
  const { className, onClick, title, arr, counter, setState } = props;
  const router = useRouter()
  const { t } = useTranslation()

  const pushToQueryNext = () => {

    if (counter == arr.length - 1) {
      setState(7)
    } else {
      onClick()
      setState(counter + 1)
      const path = {
        pathname: router.pathname,
        query: { work: t(title) }
        ,
      };
      router.push(path, path, { shallow: true });
    }

  }

  return (
    <div className={`${className} ${scss.nextArrow}`} onClick={() => pushToQueryNext()}>
      <svg
        className={`${scss.svg} svg`}
        width="32"
        height="12"
        viewBox="0 0 32 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.469669 5.46967C0.176777 5.76256 0.176777 6.23743 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.98959 6.3033 0.696697C6.01041 0.403803 5.53553 0.403803 5.24264 0.696697L0.469669 5.46967ZM32 5.25L1 5.25L1 6.75L32 6.75L32 5.25Z"
          fill="#797979"
        />
      </svg>
      <p className={scss.slider__item}>{t(title)}</p>
    </div>
  );
}