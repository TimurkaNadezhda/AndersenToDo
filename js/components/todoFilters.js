import Component from './component.js'

export default class TodoFiltersComponent extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const filters = [
			{name: "all", count: this.props.items.length},
			{name: "active", count: this.props.items.filter(item => !item.completed).length},
			{name: "finished", count: this.props.items.filter(item => item.completed).length}
		]
		return `<div class="todo-list-filters">
					<ul>
						${filters.map(item => {
							return `<li id="filter-item-${item.name}" ${item.name === this.props.activeFilter ? 'class="active"' : ''}>${item.name} (${item.count})</li>`
						}).join("")}
					</ul>
				</div>`
	}
}