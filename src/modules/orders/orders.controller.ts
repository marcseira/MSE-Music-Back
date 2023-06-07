import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Order')
@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    
    order.order_email = createOrderDto.order_email;
    return await this.orderService.create(order);
  }

  @Get()
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return await this.orderService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = new Order();
   
    order.order_email = updateOrderDto.order_email;
    return await this.orderService.update(id, order);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.orderService.remove(id);
  }
}
