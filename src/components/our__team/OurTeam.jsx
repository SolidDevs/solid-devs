import { useTranslation } from "react-i18next";
import SectionContainer from "../layoutComponent/SectionContainer";
import scss from "./OurTeam.module.scss";
import { useEffect, useMemo } from "react";
import OurTeamCard from "./our__team_card/OurTeamCard";
import useTeam from "@/hooks/useTeam";
import Preloader from "../Preloader/Preloader";

const OurTeam = () => {
  const { t } = useTranslation("");
  const { team, getTeam, isLoading } = useTeam();

  useEffect(() => {
    getTeam();
  }, [])

  const ourTeamItems = useMemo(
    () =>
      team?.map((item, index) => (
        <OurTeamCard key={`${item.name}_${index}`} {...item} />
      )),
    [team]
  );
  if (isLoading) return <Preloader />
  return (
    <SectionContainer title={t("ourTeam.title")} id="team" >
      <div className={scss.ourTeam} id="team">{ourTeamItems}</div>
    </SectionContainer>
  );
};

export default OurTeam;
