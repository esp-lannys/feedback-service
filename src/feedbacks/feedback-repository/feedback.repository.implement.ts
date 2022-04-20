import { Injectable } from '@nestjs/common';
import { Feedbacks } from '@prisma/client';
import { PrismaService } from '../../databases/database.module';
import { IFeedbackRepository } from './feedback.repository.interface';

@Injectable()
export class FeedbackRepositoryImplementation implements IFeedbackRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Feedbacks[]> {
    return this.prisma.feedbacks.findMany({
      where: {
        is_deleted: false,
      },
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
        is_deleted: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  findAllByCondition(
    limit: number,
    offset: number,
    condition: any,
  ): Promise<Feedbacks[]> {
    return this.prisma.feedbacks.findMany({
      take: Number(limit),
      skip: Number(offset),
      where: {
        ...condition,
        is_deleted: false,
      },
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
        is_deleted: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: { created_at: 'asc' },
    });
  }

  findById(id: string): Promise<Feedbacks> {
    return this.prisma.feedbacks.findFirst({
      where: {
        id: id,
      },
    });
  }

  create(payload: any): Promise<Feedbacks> {
    return this.prisma.feedbacks.create({
      data: payload,
    });
  }

  update(id: string, payload: any): Promise<Feedbacks> {
    return this.prisma.feedbacks.update({
      where: {
        id: id,
      },
      data: payload,
      select: {
        id: true,
        title: true,
        description: true,
        images: true,
        is_deleted: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  delete(id: string): void {
    this.prisma.feedbacks.update({
      where: {
        id: id,
      },
      data: {
        is_deleted: true,
      },
    });
  }
}
