import React from "react";
import Announcement from "../components/Announcement";
import Download from "../components/Download";
import Report from "../components/Report";
import StudyProgram from "../components/StudyProgram";
import TakeLesson from "../components/TakeLesson";
import WannaLearn from "../components/WannaLearn";
import WantTeach from "../components/WantTeach";
import "../styles/tests.css";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const Tests = () => {
  return (
    <>
      <div className="container">
        <h1>Админка</h1>
        <hr />

        <button
          className="nav-link active"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Назначение обучения
        </button>
        <button
          className="nav-link"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Хочу провести обучение
        </button>
        <button
          className="nav-link"
          id="v-pills-messages-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-messages"
          type="button"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Хочу пройти обучение
        </button>
        <button
          className="nav-link"
          id="v-pills-settings-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-settings"
          type="button"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Загрузки
        </button>
        <button
          className="nav-link"
          id="v-pills-announcements-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-announcements"
          type="button"
          role="tab"
          aria-controls="v-pills-announcements"
          aria-selected="false"
        >
          Анонсы обучения
        </button>
        <button
          className="nav-link"
          id="v-pills-res-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-res"
          type="button"
          role="tab"
          aria-controls="v-pills-res"
          aria-selected="false"
        >
          Отчеты
        </button>
        <button
          className="nav-link"
          id="v-pills-download-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-download"
          type="button"
          role="tab"
          aria-controls="v-pills-download"
          aria-selected="false"
        >
          Программа обучения
        </button>
      </div>

      <Tabs defaultActiveKey="1" className="m-auto">
        <TabPane tab="Tab 1" key="1">
          <Announcement />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <TakeLesson />
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          <WantTeach />
        </TabPane>
        <TabPane tab="Tab 4" key="4">
          <WannaLearn />
        </TabPane>

        <TabPane tab="Tab 5" key="5">
          <Report />
        </TabPane>
        <TabPane tab="Tab 6" key="6">
          <StudyProgram />
        </TabPane>

        <TabPane tab="Tab 7" key="7">
          <Download />
        </TabPane>
      </Tabs>
    </>
  );
};

export default Tests;
