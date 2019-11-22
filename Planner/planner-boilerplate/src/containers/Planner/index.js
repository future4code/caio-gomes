import React from "react";
import { connect } from "react-redux";
import InputPlanner from "../../components/InputPlanner/InputPlanner";
import WeekDays from "../../components/WeekDays/WeekDays";
import { PlannerContainer } from './styles'

class Planner extends React.Component {
  render() {
    return (
      <PlannerContainer>
        <InputPlanner />
        <WeekDays />
      </PlannerContainer>
    )
  }
}

export default connect()(Planner);
