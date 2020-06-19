module.exports =(sequelize, DataTypes) => {
    const BattingAvg = sequelize.define ('bat', {
        nameOfBallPark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numberOfGames: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberOfHits: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberOfAtBats: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        battingAvg: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return BattingAvg;
}