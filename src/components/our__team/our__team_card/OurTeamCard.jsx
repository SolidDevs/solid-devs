import scss from "./OurTeamCard.module.scss";

const OurTeamCard = ({ image, name, speciality }) => {
  return (
    <>
      <div className={scss.ourTeam__card} id="team">
        <img
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
        <div className={scss.our__team__item_hovered} id="team" >
          <h1 className={scss.our__team__item_fullName} id="team" >
            {name}
          </h1>
          <h1 className={scss.our__team__item_position} id="team" >{speciality}</h1>
        </div>
      </div>
    </>
  );
};

export default OurTeamCard;
