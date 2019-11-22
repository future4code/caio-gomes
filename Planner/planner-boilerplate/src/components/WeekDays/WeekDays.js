import React from 'react';
import { connect } from 'react-redux'
import { fetchAllTasks } from '../../actions/inputsActions';
import { ContainerPlannerDays, WrapperDayWeek, DayName, TaskName } from './styles';
import { DaysWeek } from './DaysWeekArray';

class WeekDays extends React.Component {
	componentDidMount = () => {
		this.props.fecthTasks()
	}

	render() {
		const daysWeek = DaysWeek
		const { allTasks } = this.props;
		return (
			<ContainerPlannerDays>
				{daysWeek.map((weekday, i) => {
					return <WrapperDayWeek key={i}>
						<DayName>{weekday}</DayName>
						{allTasks.map(task => {
							if (task.day === weekday) {
								return <TaskName key={task.id}>{task.text}</TaskName>
							}
						})}
					</WrapperDayWeek>
				})}
			</ContainerPlannerDays>
		)
	}
}

const mapStateToProps = state => ({
	allTasks: state.planner.allTasks
})

const mapDispatchToProps = dispatch => ({
	fecthTasks: () => dispatch(fetchAllTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(WeekDays);