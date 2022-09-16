import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fofoca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tema: string

  @column()
  public mensagem: string

  @column()
  public data: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
