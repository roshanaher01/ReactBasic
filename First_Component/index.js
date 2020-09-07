
class App extends React.Component{
	render(){
		return (
		<div>
			<Hello 
			s1="x"
			s2="x"
			s3="x"
			/>
			<Hello 
			s1="x"
			s2="yz"
			s3="x"
			/>

		</div>
		);
	}
} 

ReactDOM.render(<App/>,document.getElementById('root'));
