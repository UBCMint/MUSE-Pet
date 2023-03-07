interface PetModel {
    _id: string,
    name: string,
    birthDate: Date,
    focusLevel: number,
    tirednessLevel: number,
    happinessLevel: number,
    isDead: boolean,
    isSick: boolean
}

export default PetModel