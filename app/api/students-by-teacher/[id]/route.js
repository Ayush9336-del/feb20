import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  try {
    const { id } = await params;  
    const teacherId = parseInt(id);

    const filePath = path.join(process.cwd(), "data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

    // filter students by teacherId
    const students = data.students.filter(
      (student) => student.teacherId == teacherId 
    );

    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching students" },
      { status: 500 }
    );
  }
}
