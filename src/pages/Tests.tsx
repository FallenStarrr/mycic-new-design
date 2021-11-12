import React, { useEffect, useState } from "react";
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
      <div className='container'>
        <h1>Админка</h1>
        <hr />

        <Tabs defaultActiveKey='1' className='m-auto'>
          <TabPane tab='Анонсы обучения' key='1'>
            <Announcement />
          </TabPane>
          <TabPane tab=' Назначение обучения' key='2'>
            <TakeLesson />
          </TabPane>
          <TabPane tab='Хочу провести обучение' key='3'>
            <WantTeach />
          </TabPane>
          <TabPane tab='Хочу пройти обучение' key='4'>
            <WannaLearn />
          </TabPane>

          <TabPane
            tab=' Отчеты
        '
            key='5'
          >
            <Report />
          </TabPane>
          <TabPane tab=' Программа обучения' key='6'>
            <StudyProgram />
          </TabPane>

          <TabPane
            tab='
          Загрузки'
            key='7'
          >
            <Download />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default Tests;
