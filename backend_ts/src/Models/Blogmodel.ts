import {Table,Column,DataType,Model} from "sequelize-typescript"
import sequelize from "sequelize/types/sequelize";

@Table({
    timestamps:false,
    tableName:"blogs"
})

export class Blogs extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        })
        id!:number;

        @Column({
            type: DataType.STRING,
            allowNull: false,
            primaryKey:true
            })
            name!:string;

            @Column({
                type: DataType.TEXT('long'),
                allowNull: false,
                })
                details!:string;
}
