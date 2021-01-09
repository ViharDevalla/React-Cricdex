import {React,useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

var i;
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography><p>{children}</p></Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function createData(name,fifty, hundred,st,ct, six, four,SR,BF,average,hs,runs,no,inns,mat) {
    return { name,fifty, hundred,st,ct, six, four,SR,BF,average,hs,runs,no,inns,mat};
  }
  function createData2(name,ten, fivew,fourw,sr, econ, ave,bbm,bbi,wkt,runs,balls,inns,mat) {
    return { name,ten, fivew,fourw,sr, econ, ave,bbm,bbi,wkt,runs,balls,inns,mat};
  }

function PlayerDesc(props) {
    const {name,imgsrc,type,country,teams,age,born,bio,bowling,batting} = props
    const [value, setValue] = useState(0);
    for(i in batting){
      console.log(batting.listA['50'])
    }
    console.log("batting",typeof(batting))
      const rows = [];
      if(bowling.listA){
        rows.push(createData2('listA', bowling.listA['10'], bowling.listA['5w'],bowling.listA['4w'],bowling.listA['SR'], bowling.listA['Econ'],bowling.listA['Ave'],bowling.listA['BBM'],bowling.listA['BBI'],bowling.listA['Wkts'],bowling.listA['Runs'],bowling.listA['Balls'],bowling.listA['Inns'],bowling.listA['Mat']))
      }
      if(bowling.firstClass){
        rows.push(createData2('FirstClass', bowling.firstClass['10'], bowling.firstClass['5w'],bowling.firstClass['4w'],bowling.firstClass['SR'], bowling.firstClass['Econ'],bowling.firstClass['Ave'],bowling.firstClass['BBM'],bowling.firstClass['BBI'],bowling.firstClass['Wkts'],bowling.firstClass['Runs'],bowling.firstClass['Balls'],bowling.firstClass['Inns'],bowling.firstClass['Mat']))
      }
      if(bowling.T20Is){
        rows.push(createData2('T20Is', bowling.T20Is['10'], bowling.T20Is['5w'],bowling.T20Is['4w'],bowling.T20Is['SR'], bowling.T20Is['Econ'],bowling.T20Is['Ave'],bowling.T20Is['BBM'],bowling.T20Is['BBI'],bowling.T20Is['Wkts'],bowling.T20Is['Runs'],bowling.T20Is['Balls'],bowling.T20Is['Inns'],bowling.T20Is['Mat']))
      }
      if(bowling.ODIs){
        rows.push(createData2('ODIs', bowling.ODIs['10'], bowling.ODIs['5w'],bowling.ODIs['4w'],bowling.ODIs['SR'], bowling.ODIs['Econ'],bowling.ODIs['Ave'],bowling.ODIs['BBM'],bowling.ODIs['BBI'],bowling.ODIs['Wkts'],bowling.ODIs['Runs'],bowling.ODIs['Balls'],bowling.ODIs['Inns'],bowling.ODIs['Mat']))
      }
      if(bowling.tests){
        rows.push(createData2('Tests', bowling.tests['10'], bowling.tests['5w'],bowling.tests['4w'],bowling.tests['SR'], bowling.tests['Econ'],bowling.tests['Ave'],bowling.tests['BBM'],bowling.tests['BBI'],bowling.tests['Wkts'],bowling.tests['Runs'],bowling.tests['Balls'],bowling.tests['Inns'],bowling.tests['Mat']))
      }

 
      const rows2 = [];
      if(batting.listA){
        createData('listA', batting.listA['50'], batting.listA['100'],batting.listA['St'],batting.listA['Ct'], batting.listA['6s'],batting.listA['4s'],batting.listA['SR'],batting.listA['BF'],batting.listA['Ave'],batting.listA['HS'],batting.listA['Runs'],batting.listA['NO'],batting.listA['Inns'],batting.listA['Mat'])
      }
      if(batting.firstClass){
        createData('FirstClass', batting.firstClass['50'], batting.firstClass['100'],batting.firstClass['St'],batting.firstClass['Ct'], batting.firstClass['6s'],batting.firstClass['4s'],batting.firstClass['SR'],batting.firstClass['BF'],batting.firstClass['Ave'],batting.firstClass['HS'],batting.firstClass['Runs'],batting.firstClass['NO'],batting.firstClass['Inns'],batting.firstClass['Mat'])

      }
      if(batting.T20Is){
        createData('T20Is', batting.T20Is['50'], batting.T20Is['100'],batting.T20Is['St'],batting.T20Is['Ct'], batting.T20Is['6s'],batting.T20Is['4s'],batting.T20Is['SR'],batting.T20Is['BF'],batting.T20Is['Ave'],batting.T20Is['HS'],batting.T20Is['Runs'],batting.T20Is['NO'],batting.T20Is['Inns'],batting.T20Is['Mat'])

      }
      if(batting.ODIs){
        createData('ODIs', batting.ODIs['50'], batting.ODIs['100'],batting.ODIs['St'],batting.ODIs['Ct'], batting.ODIs['6s'],batting.ODIs['4s'],batting.ODIs['SR'],batting.ODIs['BF'],batting.ODIs['Ave'],batting.ODIs['HS'],batting.ODIs['Runs'],batting.ODIs['NO'],batting.ODIs['Inns'],batting.ODIs['Mat'])
      }
      if(batting.tests){
        createData('Tests', batting.tests['50'], batting.tests['100'],batting.tests['St'],batting.tests['Ct'], batting.tests['6s'],batting.tests['4s'],batting.tests['SR'],batting.tests['BF'],batting.tests['Ave'],batting.tests['HS'],batting.tests['Runs'],batting.tests['NO'],batting.tests['Inns'],batting.ODIs['Mat'])

      }
 
    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    return (
        <div>
            <div className='bigcard'>
                <div className='left'>
                    <h2>{name}</h2>
                    <div className="cardimg">
                        <img src={imgsrc} className='image2' alt={name}/>
                    </div>
                    <div className="card2">
                        Type : {type}<br/>
                        Country : {country}<br/>
                        Teams : {teams}<br/>
                        Age : {age}<br/>
                        Born : {born}
                    </div>
                </div>
                <div className='right'>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Biograpghy"  className='tab'/>
                    <Tab label="Batting Stats"  className='tab'/>
                    <Tab label="Bowling Stats"  className='tab'/>
                </Tabs>
                <TabPanel value={value} index={0}>
                {bio}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Batting Stats
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="right">Match Type</TableCell>
                                <TableCell align="right">50</TableCell>
                                <TableCell align="right">100</TableCell>
                                <TableCell align="right">St</TableCell>
                                <TableCell align="right">Ct</TableCell>
                                <TableCell align="right">6s</TableCell>
                                <TableCell align="right">4s</TableCell>
                                <TableCell align="right">Strike Rate</TableCell>
                                <TableCell align="right">BF</TableCell>
                                <TableCell align="right">Average</TableCell>
                                <TableCell align="right">Highest Score</TableCell>
                                <TableCell align="right">Runs</TableCell>
                                <TableCell align="right">Not Out</TableCell>
                                <TableCell align="right">Innings</TableCell>
                                <TableCell align="right">Matches</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows2.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.fifty}</TableCell>
                                <TableCell align="right">{row.hundred}</TableCell>
                                <TableCell align="right">{row.st}</TableCell>
                                <TableCell align="right">{row.ct}</TableCell>
                                <TableCell align="right">{row.six}</TableCell>
                                <TableCell align="right">{row.four}</TableCell>
                                <TableCell align="right">{row.SR}</TableCell>
                                <TableCell align="right">{row.bf}</TableCell>
                                <TableCell align="right">{row.average}</TableCell>
                                <TableCell align="right">{row.hs}</TableCell>
                                <TableCell align="right">{row.runs}</TableCell>
                                <TableCell align="right">{row.no}</TableCell>
                                <TableCell align="right">{row.inns}</TableCell>
                                <TableCell align="right">{row.mat}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Bowling Stats
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                            <TableRow>
                            <TableCell align="right">Match Type</TableCell>
                                <TableCell align="right">10</TableCell>
                                <TableCell align="right">5w</TableCell>
                                <TableCell align="right">4w</TableCell>
                                <TableCell align="right">SR</TableCell>
                                <TableCell align="right">Economy</TableCell>
                                <TableCell align="right">Average</TableCell>
                                <TableCell align="right">BBM</TableCell>
                                <TableCell align="right">BBI</TableCell>
                                <TableCell align="right">Wickets</TableCell>
                                <TableCell align="right">Runs</TableCell>
                                <TableCell align="right">Balls</TableCell>
                                <TableCell align="right">Innings</TableCell>
                                <TableCell align="right">Matches</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* name,ten, fivew,fourw,sr, econ, ave,bbm,bbi,wkt,runs,balls,inns,mat */}
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.ten}</TableCell>
                                <TableCell align="right">{row.fivew}</TableCell>
                                <TableCell align="right">{row.fourw}</TableCell>
                                <TableCell align="right">{row.sr}</TableCell>
                                <TableCell align="right">{row.econ}</TableCell>
                                <TableCell align="right">{row.ave}</TableCell>
                                <TableCell align="right">{row.bbm}</TableCell>
                                <TableCell align="right">{row.bbi}</TableCell>
                                <TableCell align="right">{row.wkt}</TableCell>
                                <TableCell align="right">{row.runs}</TableCell>
                                <TableCell align="right">{row.balls}</TableCell>
                                <TableCell align="right">{row.inns}</TableCell>
                                <TableCell align="right">{row.mat}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>

                </TabPanel>
                </div>
            </div>
      </div>
    )
}





export default PlayerDesc
