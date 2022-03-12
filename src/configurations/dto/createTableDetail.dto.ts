export class CreateTableDetailDto {
  tableTypeId: string
  header: string
  dataType: string
  format?: string
  required: boolean
}

export class UpdateTableDetailDto {
  header: string
  dataType: string
  format?: string
  required: boolean
}
