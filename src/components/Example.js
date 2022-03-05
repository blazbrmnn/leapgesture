import { classNamed } from 'classnamed-components';

const Card = classNamed('div')`card border-0 shadow-sm`
const CardImageTop = classNamed('img')`card-img-top`
const CardBody = classNamed('div')`card-body`
const CardTitle = classNamed('h5')`card-title`
const CardText = classNamed('p')`card-text`
const CardCTA = classNamed('button')`btn btn-primary`

export const Example = ({style, ...props}) => (
	<Card style={{width: '18rem', ...style}} {...props}>
		<CardImageTop src="./airrails.screen-layout.png" alt="Card image cap"/>
		<CardBody>
			<CardTitle>Card title</CardTitle>
			<CardText>
				Some quick example text to build on the card title
				and make up the bulk of the card's content.
			</CardText>
			<CardCTA as="a">Go somewhere</CardCTA>
		</CardBody>
	</Card>
)

export default Example;