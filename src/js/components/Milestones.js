class Milestones extends React.Component {
    render() {
        return (<div className="card mt-3">
            <div className="card-title card-header"><i className="far fa-flag"/> Milestones</div>
            <table className="table table-bordered">
                <tr>
                    <td className="text-center"><a href="https://lyranalytics.com" target="_blank"><img  height="60px"
                                                                                                 src="https://media-exp1.licdn.com/dms/image/C4D0BAQHrMuIlyTBdGw/company-logo_200_200/0?e=1589414400&v=beta&t=g9Dfs3SLEuVFhcRmhbTrC7KNCSq5Y_MrOkt4Jj37KOM"
                                                                                                 alt="Lyra" /></a></td>
                    <td>
                        2020-02-10 <i className="fas fa-arrow-right"></i> 2020-04-01<br/> <strong>Lyra</strong><br/>
                        AI Launchpad
                    </td>
                </tr>
                <tr>
                    <td className="text-center"><a href="https://www.agolo.com" target="_blank"><img src='./src/img/svg/agolo.png' title="Agolo" height="60px"/></a></td>
                    <td>
                        2019-07-1 <i className="fas fa-arrow-right"></i> 2019-10-1<br/> <strong>Agolo</strong><br/>
                        Natural Language Processing Engineering Internship
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <a href="https://fci.cu.edu.eg/Home" target="_blank">
                <img src='./src/img/svg/Cairo_University_Crest.png' title="Cairo University" height="60px" style={{webkitFilter: "grayscale(40%)"}}/>
                </a>
                    </td>
                    <td>
                        2015-09-25 <i className="fas fa-arrow-right"></i> 2019-06-25<br/> <strong>Cairo University</strong><br/>
                        Bachelor's degree, Computer Science<br/>
                        <em>Faculty of Computers and ِArtificial Intelligence</em>
                    </td>
                </tr>
                <tr>
                    <td className="text-center"><i className="fas fa-baby fa-3x" /></td>
                    <td>1996-05-10  </td>
                </tr>
            </table>
        </div>)
    }
}
ReactDOM.render(React.createElement(Milestones), document.querySelector('#milestones'));
