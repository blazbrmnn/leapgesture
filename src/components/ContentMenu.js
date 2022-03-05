import './ContentMenu.css';

export function ContentMenu (props) {
  const radios = [
    { name: 'Selection', value: 1 },
    { name: 'Timeline', value: 2 },
    { name: 'Priority', value: 3 },
    { name: 'Media', value: 4 }
  ];
  
	return (
		<>
			<form className="filters">
				<div className="btn-group" role="group">
					{radios.map((radio) => (
						<>
						  <input 
						  	id={`btnradio${radio.value}`}
						  	value={radio.value}
						  	type="radio" 
						  	key={`a-${radio.value}`}
						  	className="btn-check" 
						  	name="btnradio" 
						  	autoComplete="off"
						  	checked={props.filterValue == radio.value}
						  	onChange={(e) => props.setFilterValue(e.currentTarget.value)}
						  />
						  <label key={`b-${radio.value}`} className="btn btn-primary" htmlFor={`btnradio${radio.value}`}>{radio.name}</label>
						</>
					))}
				</div>
			</form>
			<hr className="filters-divider left" />
			<hr className="filters-divider right" />
		</>
	)
}