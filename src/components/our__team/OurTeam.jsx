import { useTranslation } from "react-i18next";
import SectionContainer from "../layoutComponent/SectionContainer";
import scss from "./OurTeam.module.scss";
import { useMemo } from "react";
import { ourTeamData } from "@/constants/ourTeam";
import OurTeamCard from "./our__team_card/OurTeamCard";

const OurTeam = () => {
  const { t } = useTranslation("");
  const ourTeamItems = useMemo(
    () =>
      ourTeamData.map((item, index) => (
        <OurTeamCard key={`${item.name}_${index}`} {...item} />
      )),
    []
  );
  return (
    <SectionContainer title={t("ourTeam.title")}>
      <div className={scss.our__team}>{ourTeamItems}</div>
    </SectionContainer>
  );
};

export default OurTeam;
