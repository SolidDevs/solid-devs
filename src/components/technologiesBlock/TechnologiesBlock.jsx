import { technologiesLinks } from "@/constants/navbar";
import SectionContainer from "../layoutComponent/SectionContainer";
import Navbar from "../navbar/Navbar";
import scss from "./Technologies.module.scss";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useMemo, useState } from "react";
import { db } from "../../firebase/firebase";
import { useRouter } from "next/router";
import { collection, getDocs, query, where } from "firebase/firestore";

const TechnologiesBlock = () => {
  const { t } = useTranslation("");
  const [isOpen, setOpen] = useState(true);
  const [data, setData] = useState([]);

  const router = useRouter();
  const { technologies } = router.query;

  useEffect(() => {
    const path = {
      pathname: "",
      search: "?technologies=devOps",
    };
    router.push(path, path, { shallow: true });
  }, []);

  const filtering = async ({ category, operator, comparison }) => {
    const q = query(
      collection(db, "technologies"),
      where(category, operator, comparison)
    );
    const data = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let obj = {
        docId: doc.id,
        ...doc.data(),
      };
      data.push(obj);
    });
    setData(data);
  };

  useMemo(() => {
    if (technologies == "devOps") {
      filtering({ category: "category", operator: "==", comparison: "DevOps" });
    } else if (technologies == "frontend") {
      filtering({
        category: "category",
        operator: "==",
        comparison: "Frontend",
      });
    } else if (technologies == "qa") {
      filtering({ category: "category", operator: "==", comparison: "QA" });
    } else if (technologies == "backend") {
      filtering({
        category: "category",
        operator: "==",
        comparison: "Backend",
      });
    } else if (technologies == "mobilePhone") {
      filtering({ category: "category", operator: "==", comparison: "Mobile" });
    } else if (technologies == "infrastructure") {
      filtering({
        category: "category",
        operator: "==",
        comparison: "Infrastructure",
      });
    } else if (technologies == "UX/UI") {
      filtering({ category: "category", operator: "==", comparison: "UX/UI" });
    }
  }, [technologies]);
  const technologiesItems = useMemo(
    () =>
      data?.map((item, index) => (
        <div className={scss.technologies__item} key={`${item}_${index}`}>
          <div className={scss.item__dekstop} id="technologies">
            <div className={scss.icon}>
              <img
                src={`${item.image}`}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <p className={scss.title}>{t(item.title)}</p>
          </div>
          <div className={scss.item__adaptive} id="technologies">
            <div className={scss.icon}>
              <img
                src={`${item.image}`}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <div className={scss.technologies__line}></div>
            <p className={scss.title}>{t(item.title)}</p>
          </div>
        </div>
      )),
    [t, data]
  );
  const handleOpen = useCallback(() => {
    setOpen(isOpen);
  });
  return (
    <SectionContainer title={t("technologies.title")} id="technologies">
      <Navbar
        clickable={true}
        navbarLinks={technologiesLinks}
        paramName={"technologies"}
        handleOpen={handleOpen}
      >
        {isOpen && technologiesItems}
      </Navbar>
      <div className={scss.technologies__dekstop} id="technologies">
        {technologiesItems}
      </div>
    </SectionContainer>
  );
};

export default TechnologiesBlock;
