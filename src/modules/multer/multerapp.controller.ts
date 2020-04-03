import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  Param,
  Get,
  Res,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from './multer';

@Controller()
export class MulterAppController {
  @Post('upload/multiple')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: './upload',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        file: file,
      };
      response.push(fileReponse);
    });
    return response;
  }

  @Get('upload/:filename')
  async getFile(@Param('filename') filename: string, @Res() res) {
    return res.sendFile(filename, { root: './upload' });
  }
}
