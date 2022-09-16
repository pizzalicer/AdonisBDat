import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Fofoca from 'App/Models/Fofoca'
import FofocaValidator from 'App/Validators/FofocaValidator'


export default class FofocasController {
  public async index({ }: HttpContextContract) {
    const fofoca = await Fofoca.all()
    return fofoca
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(FofocaValidator)
    const fofoca = await Fofoca.create({ ...data })
    return fofoca
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const fofoca = await Fofoca.findOrFail(params.id)
      return fofoca
    } catch (error) {
      response.status(400).send("Fofoca não encontrada!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { tema, mensagem, data } = await request.validate(FofocaValidator)
    try {
      const fofoca = await Fofoca.findOrFail(params.id)
      fofoca.tema = tema
      fofoca.mensagem = mensagem
      fofoca.data = data
      await fofoca.save()
      return fofoca

    } catch (error) {
      response.status(400).send("Fofoca não encontrada!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const fofoca = await Fofoca.findOrFail(params.id)
      await fofoca.delete()
      return fofoca
    } catch (error) {
      response.status(400).send("Fofoca não encontrada!!!")
    }
  }

