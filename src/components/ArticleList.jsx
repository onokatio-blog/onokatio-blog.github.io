import React from "react"
import ArticleItem from "./ArticleItem.jsx"

export default class ArticleList extends React.Component {
	render() {
			return (
				<ul>
					{
						this.props.items.map( (item, index) => {
						return (
							<ArticleItem key={index} title={item.title} summary={item.summary} link={item.link} />
						)
						})
					}
				</ul>
			)
	}
}
