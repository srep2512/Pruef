/*eslint-disable*/
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {   
    Tickets: [], 
    Pruefungen: [{"Title":"I-474 Personalwesen (W953)","ExamType":"SP","StudyBranch":"PW","Day":"15.02.","StartTime":"7:30","EndTime":"9:00","Examiner":"K.Lange","NextChance":"","Rooms":["S 114"]},{"Title":"I-755  Software Factories","ExamType":"SP","StudyBranch":"IIK/PW","Day":"08.02.","StartTime":"7:30","EndTime":"9:00","Examiner":"D.M\u00fcller","NextChance":"","Rooms":["S 128","S 129"]},{"Title":"I-456  IT-Service-Management","ExamType":"SP","StudyBranch":"PW","Day":"05.02.","StartTime":"14:00","EndTime":"15:30","Examiner":"D.Reichelt","NextChance":"","Rooms":["Z 254"]},{"Title":"I-143  Erweiterte Datenbanktechnologien/Medienarchive","ExamType":"SP","StudyBranch":"IIK/PW/CMT","Day":"22.02.","StartTime":"13:30","EndTime":"15:00","Examiner":"G.Gr\u00e4fe","NextChance":"","Rooms":["S 327"]},{"Title":"I-886  Mathematische / Stochastische Modelle","ExamType":"SP","StudyBranch":"IIK/PW/CMT","Day":"21.02.","StartTime":"7:30","EndTime":"9:30","Examiner":"A.Vo\u00df-B\u00f6hme","NextChance":"","Rooms":["S 227","S 228","S 221"]},{"Title":"I-170  Informationssicherheit","ExamType":"SP","StudyBranch":"IIK/PW/CMT","Day":"19.02.","StartTime":"9:30","EndTime":"11:00","Examiner":"A.Westfeld / R.Baumgartl","NextChance":"","Rooms":["S 221","S 232","S 231"]},{"Title":"I-778  Marketing/Unternehmensf\u00fchrung","ExamType":"SP","StudyBranch":"IIK/CMT","Day":"15.02.","StartTime":"9:30","EndTime":"11:00","Examiner":"N.Neuvians / A.St\u00f6hr / T.Gonschorek","NextChance":"","Rooms":["Z 254","S 239"]},{"Title":"I-176  IT-Vertragsrecht","ExamType":"SP","StudyBranch":"IIK/PW/CMT","Day":"06.02.","StartTime":"10:00","EndTime":"11:30","Examiner":"A.Westfeld","NextChance":"","Rooms":["S 331","S 317"]},{"Title":"I-753  Mensch-Maschine-Kommunikation/Robotik","ExamType":"SP","StudyBranch":"IIK/CMT","Day":"20.02.","StartTime":"9:30","EndTime":"11:30","Examiner":"H.B\u00f6hme","NextChance":"","Rooms":["S 227","S 228"]}],
    Config:[]      
},
getters: {
    getPruef: state => state.Pruefungen,  
    getConfig: state => state.Config,     
},

mutations:  {  
    SETEXAMS(state, exams){  
        var arr = exams;
        
        arr.forEach((part, index) => {
          arr[index].Day = part.Day.split(".",1)[0]
        });        
        arr.sort((x,y)=>{
            return x.Day-y.Day
        })        
        state.Pruefungen = arr.filter(x=>x.StudyBranch.includes("PW"))              
    }
  },
actions: {
  fetchPruef({ commit }){
    fetch("https://www2.htw-dresden.de/~app/API/GetExams.php?StgJhr=2017&Stg=044&AbSc=M", {
                    method: "GET",
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(exams) {                           
                        commit('SETEXAMS', exams)
                });
  } 
}
    
})


