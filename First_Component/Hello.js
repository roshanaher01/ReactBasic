class Hello extends React.Component{
	render(){
        const {s1,s2,s3}=this.props;
        const winner= (s1===s2)&& (s2===s3)&&(s1===s3);
        console.log(winner);
		return (
		<div className="machine">
            <h1>slot machine</h1>
			<h1>{s1} {s2} {s3}</h1>
        <h2 className={winner?'win':'lose'}>{winner?'winner':'looser'}</h2>   
		</div>
		);
	}
} 