import CommonService from '../../domain/service/CommonService';
import { Module } from '@nestjs/common';

@Module({
  exports: [CommonService],
  providers: [CommonService],
})
class CommonModule {}

export default CommonModule;
