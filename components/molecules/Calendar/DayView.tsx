import styles from '../../../styles/MainCalendar.module.css';



const DayView = () =>{
    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

    return <>
    <div style={{display:'grid', gridTemplateColumns: '48px 1fr', gridTemplateRows: '84px 1fr'}}>
        <div style={{color: '#70757a',fontSize: '10px', display:'flex', alignItems:'flex-end'}}>GMT+3</div>
        <div style={{marginLeft:'8px', width:'fit-content'}}>
            <div className={styles.day__name}>Wed</div><div className={styles.day__number}>5</div>
        </div>
        <div style={{borderRight:'1px solid #482ff7'}}>
            {hours.map((hour) => { return <div style={{height: '48px'}}>{hour}:00</div> })} 
        </div>  
        <div>
            {hours.map((hour) => { return <div style={{borderBottom: '1px solid #482ff7', height: '48px'}}></div> })}
        </div>
    </div>
    </> 
    }
    export default DayView