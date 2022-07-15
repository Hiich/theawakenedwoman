import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

// RotateBadge
import RotateBadge from "../components/Fragment/CircleImage";
// Icons
import ImageIcon from "../public/icons/image.svg";

// Fetch Data
function RoadMap() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/RoadMapData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading StackedCard</p>;
  if (!data) return <p>No data</p>;

  return (
    <section className="relative py-32 overflow-hidden text-center bg-no-repeat bg-size-cover">
      <div>
        <div className="flex justify-center ">
          <div className="text-center w-761">
            <h1 className="font-V-Bold text-36">{data.RM_Title}</h1>
            <p className="px-8 text-sm sm:text-xl font-Poppins-Light">
              {data.RM_Content}
            </p>
          </div>
        </div>
        <div id="roadmap">
          <div className="timeline">
            <ul>
              <li className="active first colored">
                <div className="done">
                  <time className="text-xl font-semibold text-white font-V-Bold">
                    This is a tooltip
                  </time>
                  <p className="text-sm text-white font-Poppins-Light">
                    Tooltips are used to describe or identify an element. In
                    most scenario, tooltips help the user understand the
                    meaning, function or alt-text of an element.
                  </p>
                </div>
              </li>
              <li className="active">
                <div className="done">
                  <time className="text-xl font-semibold text-white font-V-Bold">
                    This is a tooltip
                  </time>
                  <p className="text-sm text-white font-Poppins-Light">
                    Tooltips are used to describe or identify an element. In
                    most scenario, tooltips help the user understand the
                    meaning, function or alt-text of an element.
                  </p>
                </div>
              </li>
              <li className="active colored">
                <div>
                  <time className="text-xl font-semibold text-white font-V-Bold">
                    This is a tooltip
                  </time>
                  <p className="text-sm text-white font-Poppins-Light">
                    Tooltips are used to describe or identify an element. In
                    most scenario, tooltips help the user understand the
                    meaning, function or alt-text of an element.
                  </p>
                </div>
              </li>
              <li className="active">
                <div>
                  <time className="text-xl font-semibold text-white font-V-Bold">
                    This is a tooltip
                  </time>
                  <p className="text-sm text-white font-Poppins-Light">
                    Tooltips are used to describe or identify an element. In
                    most scenario, tooltips help the user understand the
                    meaning, function or alt-text of an element.
                  </p>
                </div>
              </li>
              <li className="active last">
                <div>
                  <time className="text-xl font-semibold text-white font-V-Bold">
                    This is a tooltip
                  </time>
                  <p className="text-sm text-white font-Poppins-Light">
                    Tooltips are used to describe or identify an element. In
                    most scenario, tooltips help the user understand the
                    meaning, function or alt-text of an element.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="/Background/RM_bg.svg"
        className="absolute w-full opacity-70 z- top-40"
      />
    </section>
  );
}

export default RoadMap;
