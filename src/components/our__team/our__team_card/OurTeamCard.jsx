import Image from "next/image";
import scss from "./OurTeamCard.module.scss";
import { useTranslation } from "react-i18next";

const OurTeamCard = ({ image, name, surname, position }) => {
  const { t } = useTranslation("");
  return (
    <>
      <div className={scss.ourTeam__card}>
        <Image
          src={image}
          alt={`${name} ${surname}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className={scss.our__team__item_hovered}>
          <h1 className={scss.our__team__item_fullName}>
            {`${t(surname)}  ${t(name)}`}
          </h1>
          <h1 className={scss.our__team__item_position}>{t(position)}</h1>
        </div>
      </div>
    </>
  );
};

export default OurTeamCard;
