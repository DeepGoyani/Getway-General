import { db } from "./db";
import { leads, type CreateLeadRequest, type LeadResponse } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createLead(lead: CreateLeadRequest): Promise<LeadResponse>;
}

export class DatabaseStorage implements IStorage {
  async createLead(lead: CreateLeadRequest): Promise<LeadResponse> {
    const [created] = await db.insert(leads).values(lead).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
