import IParseMailTemplateDTO from '@shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTOS';

interface IMailContent {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContent;
  from?: IMailContent;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
