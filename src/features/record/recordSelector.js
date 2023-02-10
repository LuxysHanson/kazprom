
export const getRecordState = (state) => state.recordReducer.records

export const newRecord = (name) => {
    return {
        name: name,
        id: Date.now()
    }
};