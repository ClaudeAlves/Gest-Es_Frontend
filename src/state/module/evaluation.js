import States from '@/state/States'


const evaluation = {
    state: () => ({
        evaluation: {
            state: States.INIT,
            message: "messageEvaluation",
            data: {
                studentGrades: [
                    {
                        student: "",
                        grades: {
                            courseId: "",
                            courseName: "",
                            value: ""
                        }
                    }
                ],
                studentCourseMarks: [
                    {
                        student: "",
                        marks: [
                            {
                                value: ""
                            }
                        ]
                    }
                ],
                tests: [

                ]
            }
        }
    }),
    getters: {
        getGrades(state) {
            return state.evaluation.data.studentGrades;
        },
        getStudentMarks(state) {
            return state.evaluation.data.studentCourseMarks;
        }
    }
}
export default evaluation;