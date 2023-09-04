import { Tab, Tabs, Accordion } from "react-bootstrap";
import { useState } from "react";
import "./IndividualData.css";
import SourcesModal from "../Modal/SourcesModal";
import RenderIndividualData from "./../RenderIndividualData/RenderIndividualData";

export default function IndividualData(props) {
  const [show, setShow] = useState(false);
  const [tableData, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setShow(true);
    setData(data);
  };
  const { personal, work, ownershipAndControl, ip } = props.data;
  const {
    namesAndInitials = [],
    contactInfo = [],
    idsAndLicenses = [],
    discoveredDemographics = [],
    backgroundChecksHistory = [],
    unionMembership = [],
    whistleBlower = [],
    healthInfo = [],
  } = personal;
  const {
    currentPositions = [],
    priorPositions = [],
    responsibilitiesAndJobDescription = [],
    trainingHistory = [],
    compensationHistory = [],
    performanceEvaluationHistory = [],
    disciplinaryActionsHistory = [],
    contractualHistory = [],
  } = work;
  const {
    equityRights = [],
    lendingHistoryCreditor = [],
    lendingHistoryBorrower = [],
    otherControllingRights = [],
  } = ownershipAndControl;
  const { data = [] } = ip;

  const personalAccordion = [
    {
      title: "Discovered Associated Name and Initials",
      evKey: "namesAndInitials",
      data: namesAndInitials,
    },
    {
      title: "Discovered Associated contactInfo",
      evKey: "contactInfo",
      data: contactInfo,
    },
    {
      title: "Discovered IDs and Professional Licenses",
      evKey: "idsAndLicenses",
      data: idsAndLicenses,
    },
    {
      title: "Discovered Demographics",
      evKey: "discoveredDemographics",
      data: discoveredDemographics,
    },
    {
      title: "Union Membership",
      evKey: "unionMembership",
      data: unionMembership,
    },
    {
      title: "Background Check History",
      evKey: "backgroundChecksHistory",
      data: backgroundChecksHistory,
    },
    {
      title: "Whistle Blower",
      evKey: "whistleBlower",
      data: whistleBlower,
    },
    {
      title: "Discovered Health Info",
      evKey: "healthInfo",
      data: healthInfo,
    },
  ];

  const workAccordion = [
    {
      title: "Current Positions",
      evKey: "currentPositions",
      data: currentPositions,
    },
    {
      title: "Prior Positions",
      evKey: "priorPositions",
      data: priorPositions,
    },
    {
      title: "Responsibilities And Job Description",
      evKey: "responsibilitiesAndJobDescription ",
      data: responsibilitiesAndJobDescription,
    },
    {
      title: "Training History",
      evKey: "trainingHistory",
      data: trainingHistory,
    },
    {
      title: "Compensation History",
      evKey: "compensationHistory",
      data: compensationHistory,
    },
    {
      title: "Performance Evaluation History",
      evKey: "performanceEvaluationHistory",
      data: performanceEvaluationHistory,
    },
    {
      title: "Disciplinary Actions History",
      evKey: "disciplinaryActionsHistory",
      data: disciplinaryActionsHistory,
    },
    {
      title: "Contractual History",
      evKey: "contractualHistory",
      data: contractualHistory,
    },
  ];

  return (
    <>
      <Tabs
        defaultActiveKey="namesAndInitials"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="namesAndInitials" title="Personal">
          <Accordion className="accordion" defaultActiveKey="0">
            {personalAccordion &&
              personalAccordion.map((items, index) => {
                return (
                  <RenderIndividualData
                    title={items.title}
                    ev={items.evKey}
                    mapData={items.data}
                    handleShow={handleShow}
                    key={index}
                  />
                );
              })}
          </Accordion>
        </Tab>
        <Tab eventKey="work" title="Work">
          <Accordion className="accordion" defaultActiveKey="0">
            {workAccordion &&
              workAccordion.map((items, index) => {
                return (
                  <RenderIndividualData
                    title={items.title}
                    ev={items.evKey}
                    mapData={items.data}
                    handleShow={handleShow}
                    key={index}
                  />
                );
              })}
          </Accordion>
        </Tab>
        <Tab eventKey="oc" title="Ownership & Control">
          Ownership & Control content
        </Tab>
        <Tab eventKey="ip" title="IP">
          IP content
        </Tab>
      </Tabs>
      <SourcesModal data={tableData} show={show} handleClose={handleClose} />
    </>
  );
}
