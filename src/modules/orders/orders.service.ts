import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
    ) { }

    async create(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);
    }

    async findAll(): Promise<Order[]> {
        return this.orderRepository.find({
            relations: ['cart'],
        });
    }

    async findOne(id: string): Promise<Order> {
        return await this.orderRepository.findOne({ where: { id } });;
    }

    async update(id: string, order: Order): Promise<Order> {
        await this.orderRepository.update(id, order);
        return await this.orderRepository.findOne({ where: { id } });;
    }

    async remove(id: string): Promise<void> {
        await this.orderRepository.delete(id);
    }
}
